"use client";

import { useState } from "react";

/**
 * 사용자 로그인을 위한 컴포넌트
 *
 * todo: 본인 인증과정이 필요하며, 그렇지 못한 경우 OAuth로 대체
 */
export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    alert("로그인 버튼이 클릭되었습니다!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>로그인</h2>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
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
        <button type="submit" style={styles.button}>
          로그인
        </button>
      </form>
      <div style={styles.signup}>
        <span>계정이 없으신가요? </span>
        <a href="/signup" style={styles.link}>
          회원가입
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
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  signup: {
    marginTop: "20px",
    fontSize: "14px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};
