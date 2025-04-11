package com.ai.chat;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@AllArgsConstructor
@RequestMapping("/ai/qna")
public class AIController {

    private final QnAService qnaService;


    @PostMapping("/ask")
    public ResponseEntity<String> askQuestions(@RequestBody Map<String,String> payload) {
        String question = payload.get("question");
        String answer = qnaService.getAnswer(question);
        if (answer == null) {
            return ResponseEntity.badRequest().body("Sorry, I don't know the answer to that question.");
        }
        return ResponseEntity.ok(answer);
    }
}
