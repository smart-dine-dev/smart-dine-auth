import { ForgotPasswordForm } from "./components/auth/ForgotPasswordForm";
import { LoginForm } from "./components/auth/LoginForm";
import { OtpVerifyModal } from "./components/auth/OtpVerifyModal";
import { PasswordResetForm } from "./components/auth/PasswordResetForm";
import { RegisterForm } from "./components/auth/RegisterForm";
import { UserProfileCard } from "./components/auth/UserProfileCard";
import { ToastContainer } from "./components/common/ToastContainer";
import AuthLayout from "./components/layout/AuthLayout";
import Navbar from "./components/layout/Navbar";
import useAuth from "./hooks/useAuth";

function App() {
  const { isAuthenticated, currentView } = useAuth();

  const renderAuthContent = () => {
    switch (currentView) {
      case AUTH_VIEW.REGISTER:
        return <RegisterForm />;
      case AUTH_VIEW.VERIFY_OTP:
        return <OtpVerifyModal />;
      case AUTH_VIEW.FORGOT_PASSWORD:
        return <ForgotPasswordForm />;
      case AUTH_VIEW.RESET_PASSWORD:
        return <PasswordResetForm />;
      case AUTH_VIEW.LOGIN:
      default:
        return <LoginForm />;
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-bg-ambient" area-hidden="true" />
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {isAuthenticated ? (
          <UserProfileCard /> // load related project here
        ) : (
          <AuthLayout>{renderAuthContent()}</AuthLayout>
        )}
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
