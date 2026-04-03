import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blinkIcon from '../assets/blink.svg';
import googleIcon from '../assets/google.svg';
import kakaoIcon from '../assets/kakaologo.svg';
import logoIcon from '../assets/loginLogo.svg';
import nonBlinkIcon from '../assets/non-blink.svg';
import styles from './LoginPage.module.css';

const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const getEmailError = (): string => {
    if (!emailTouched) return '';
    if (!email) return '이메일을 입력해주세요.';
    if (!emailPattern.test(email)) return '잘못된 이메일 형식입니다.';
    return '';
  };

  const getPasswordError = (): string => {
    if (!passwordTouched) return '';
    if (!password) return '비밀번호를 입력해주세요.';
    if (password.length < 8) return '비밀번호를 8자 이상 입력해주세요.';
    return '';
  };

  const emailError = getEmailError();
  const passwordError = getPasswordError();

  const isEmailValid = email.length > 0 && emailPattern.test(email);
  const isPasswordValid = password.length >= 8;
  const canSubmit = isEmailValid && isPasswordValid;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);
    if (!canSubmit) return;
    navigate('/items');
  };

  const getContainerClass = (touched: boolean, error: string): string => {
    return [
      styles['login-container'],
      touched && (error ? styles['error-border'] : styles['accept-border']),
    ]
      .filter(Boolean)
      .join(' ');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.wrapper}>
        <header className={styles['top-header']}>
          <img src={logoIcon} alt="판다마켓 로고" />
          <Link to="/">
            <h1 className={styles['logo-name']}>판다마켓</h1>
          </Link>
        </header>

        <main>
          <form onSubmit={handleSubmit}>
            <div className={styles['login-input']}>
              <label className={styles['label-input']} htmlFor="id">
                이메일
              </label>
              <div className={getContainerClass(emailTouched, emailError)}>
                <input
                  className={styles['id-input']}
                  type="email"
                  id="id"
                  placeholder="이메일을 입력해주세요"
                  autoComplete="username"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => setEmailTouched(true)}
                />
              </div>
              <p className={styles['error-message']}>{emailError}</p>
            </div>

            <div className={styles['login-input']}>
              <label className={styles['label-input']} htmlFor="password">
                비밀번호
              </label>
              <div
                id="password-container"
                className={getContainerClass(passwordTouched, passwordError)}
              >
                <input
                  className={styles['password-input']}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={() => setPasswordTouched(true)}
                />
                <button
                  className={styles['password-blink']}
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={
                    showPassword ? '비밀번호 숨기기' : '비밀번호 보기'
                  }
                >
                  <img src={showPassword ? blinkIcon : nonBlinkIcon} alt="" />
                </button>
              </div>
              <p className={styles['error-message']}>{passwordError}</p>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className={`${styles['login-button']} ${
                canSubmit ? styles['login-accept-button'] : ''
              }`}
            >
              로그인
            </button>
          </form>

          <div className={styles['easy-login-container']}>
            <div>간편 로그인하기</div>
            <div className={styles['icon-container']}>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.icon}
                  src={googleIcon}
                  alt="구글 아이콘"
                />
              </a>
              <a
                href="https://www.kakaocorp.com/page/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.icon}
                  src={kakaoIcon}
                  alt="카카오 아이콘"
                />
              </a>
            </div>
          </div>
        </main>

        <footer className={styles['final-footer']}>
          <p>
            판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
