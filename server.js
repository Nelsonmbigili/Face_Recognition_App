import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json());  // Parse JSON request bodies

// Default route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("Face Recognition API is running...");
});

// Clarifai Face Detection Route
app.post("/clarifai", async (req, res) => {
  try {
    const { imageUrl } = req.body;

    const PAT = "33f24b4dfff84d87b9ba095038a70537";
    const USER_ID = "mbigilinelsonclarify";
    const APP_ID = "Face-detection-application";
    const MODEL_ID = "face-detection";

    const requestOptions = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Key ${PAT}`
      },
      body: JSON.stringify({
        "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
        },
        "inputs": [
          {
            "data": {
              "image": {
                "url": imageUrl
              }
            }
          }
        ]
      })
    };

    const response = await fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process the request." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
