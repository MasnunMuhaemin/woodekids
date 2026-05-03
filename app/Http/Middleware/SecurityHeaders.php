<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SecurityHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if (method_exists($response, 'headers')) {
            // Mencegah Clickjacking (tidak bisa di-embed di iframe)
            $response->headers->set('X-Frame-Options', 'SAMEORIGIN');
            
            // Mencegah XSS (Cross-Site Scripting) di browser lama
            $response->headers->set('X-XSS-Protection', '1; mode=block');
            
            // Mencegah MIME-Sniffing (memaksa browser mematuhi Content-Type)
            $response->headers->set('X-Content-Type-Options', 'nosniff');
            
            // Mengontrol informasi Referrer yang dikirim
            $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
            
            // Content-Security-Policy (CSP) - Mencegah eksekusi script asing
            // Disesuaikan agar Vite, React, dan Google Fonts tetap bisa berjalan
            $csp = "default-src 'self'; " .
                   "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " .
                   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " .
                   "font-src 'self' data: https://fonts.gstatic.com; " .
                   "img-src 'self' data: blob: https:; " .
                   "connect-src 'self' ws: wss:;"; // ws: wss: dibutuhkan untuk Vite Hot Module Replacement (HMR)
                   
            $response->headers->set('Content-Security-Policy', $csp);
        }

        return $response;
    }
}
