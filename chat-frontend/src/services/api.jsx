import axios from "axios";

const API_URL = "http://localhost:8080/ai/qna/ask";

export const fetchChatResponse = async (question) => {
  try {
    const response = await axios.post(API_URL, { question }); // Send as object
    return response.data;
  } catch (error) {
    console.error("Error fetching chat response:", error);
    throw error;
  }
};
