"use client";

import React, { useState } from "react";

/**
 * 사용자 회원가입을 위한 컴포넌트
 *
 * todo: 본인 인증과정이 필요하며, 그렇지 못한 경우 OAuth로 대체
 */
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 회원가입 처리 로직 (예: API 호출)
    console.log("Email:", email);
    console.log("Password:", password);
    alert("회원가입이 완료되었습니다!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>회원가입</h2>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
      >
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          회원가입
        </button>
      </form>
      <div style={styles.login}>
        <span>이미 계정이 있으신가요? </span>
        <a href="/login" style={styles.link}>
          로그인
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  login: {
    marginTop: "20px",
    fontSize: "14px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};
