package com.rudrakathoke.portfolio.security;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class RateLimitingFilter implements Filter {

    private final Map<String, AtomicInteger> requestCounts = new ConcurrentHashMap<>();
    private final int MAX_REQUESTS_PER_MINUTE = 15;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        String clientIp = httpRequest.getRemoteAddr();
        requestCounts.putIfAbsent(clientIp, new AtomicInteger(0));
        
        int count = requestCounts.get(clientIp).incrementAndGet();

        if (count > MAX_REQUESTS_PER_MINUTE) {
            httpResponse.setStatus(429); // 429 Too Many Requests
            httpResponse.getWriter().write("{\"error\": \"Rate limit exceeded. Maximum 15 requests per minute allowed.\"}");
            return;
        }

        chain.doFilter(request, response);
    }
}
