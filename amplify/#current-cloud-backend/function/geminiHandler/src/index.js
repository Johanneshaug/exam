const fetch = require('node-fetch'); // Falls Sie externe Anfragen stellen müssen

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const prompt = body.prompt;

    // Beispiel für die Verarbeitung des Prompts mit einer KI-API
    try {
        const response = await fetch('https://api.your-ai-service.com/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error('Fehler bei der KI-API-Anfrage');
        }

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify({ response: data.generatedText }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Interner Serverfehler' }),
        };
    }
};
