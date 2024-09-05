import {
    Box,
    Button,
    CircularProgress,
    TextField,
    Typography,
  } from "@mui/material";
  import axios from "axios";
  import React from "react";
  import ReactMarkdown from "react-markdown";
  import { IoIosSend } from "react-icons/io";
  import { FaLinkedin, FaKaggle, FaGithub } from "react-icons/fa";
  
  const Main = () => {
    const [query, setQuery] = React.useState<string>("");
    const [answer, setAnswer] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
  
    const generateAns = async () => {
      setAnswer(null);
      setLoading(true);
      try {
        const response = await axios.post(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCVZUQXAxMF2P5aRewiAnba3rdW_BE9Gtc",
          { contents: [{ parts: [{ text: query }] }] }
        );
        setAnswer(response.data.candidates[0].content.parts[0].text);
      } catch (error) {
        console.error("Error fetching the answer:", error);
      } finally {
        setLoading(false);
        setQuery("");
      }
    };
  
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            padding: { xl: 8, lg: 8, md: 5, sm: 3, xs: 2 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: "bold",
                color: "#333",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              QuestGPT
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "#555",
                mt: 1,
              }}
            >
              A Quick Solution to Your Problem
            </Typography>
          </Box>
  
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: 600,
            }}
          >
            <TextField
              multiline
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              placeholder="Ask your Query..."
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                },
              }}
            />
            <Button
              disabled={!query || loading}
              onClick={generateAns}
              variant="contained"
              color="primary"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 2,
                padding: "10px 20px",
              }}
            >
              <IoIosSend size={24} style={{ marginRight: 8 }} />
              Send
            </Button>
  
            {loading && (
              <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <CircularProgress />
              </Box>
            )}
  
            {answer && (
              <Box
                sx={{
                  mt: 4,
                  px: 2,
                  py: 1,
                  width: "100%",
                  maxWidth: 600,
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  boxShadow: 3,
                  overflowY: "auto",
                  maxHeight: 400,
                  fontSize: 16,
                }}
              >
                <ReactMarkdown>{answer}</ReactMarkdown>
              </Box>
            )}
          </Box>
        </Box>
        {/* Footer Section */}
        <Box
          sx={{
            backgroundColor: "#1111",
            color: "black",
            py: 2,
            textAlign: "center",
          }}
        >
          <Typography component="p">Created with ❤️ By Hamza Kamelen</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <Button
              href="https://www.linkedin.com/in/hamzakamelen/"
              target="_blank"
              sx={{ color: "darkblue", mx: 1 }}
            >
              <FaLinkedin size={30} />
            </Button>
            <Button
              href="https://github.com/hamzakamelen"
              target="_blank"
              sx={{ color: "black", mx: 1 }}
            >
              <FaGithub size={30} />
            </Button>
            <Button
              href="https://www.kaggle.com/hamzakamelen"
              target="_blank"
              sx={{ color: "blue", mx: 1 }}
            >
              <FaKaggle size={30} />
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Main;
  