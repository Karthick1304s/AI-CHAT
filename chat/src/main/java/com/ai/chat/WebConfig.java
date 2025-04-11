package com.ai.chat;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allowing CORS for all paths and your frontend's origin (localhost:5173)
        registry.addMapping("/**") // allow all paths (you can restrict to specific paths like /chatbot/**)
                .allowedOrigins("http://localhost:5173") // allow only your React app's URL
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // allowed HTTP methods
                .allowedHeaders("*"); // allow all headers (adjust if needed)
                
    }
}
