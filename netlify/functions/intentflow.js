exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key not configured on server." }),
    };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://instaflowai.netlify.app",
        "X-Title": "IntentFlow by Bhavya Kaushal",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-4-maverick:free",
        messages: [
          {
            role: "system",
            content: "You are an expert SEO strategist and content marketing specialist. You always respond with valid JSON only — no markdown, no backticks, no explanation. Your response must start with { and end with }."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 8192,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: data?.error?.message || "OpenRouter error " + response.status }),
      };
    }

    const text = data?.choices?.[0]?.message?.content || "";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
