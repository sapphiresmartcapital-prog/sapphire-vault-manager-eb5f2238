import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Mail } from "lucide-react";

const EmailVerification = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-soft-lg border-border/50 text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-success" />
          </div>
          <CardTitle className="text-2xl font-semibold">Verify your email</CardTitle>
          <CardDescription className="text-base">
            We've sent a verification link to your email address. Please check your inbox and click
            the link to verify your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Didn't receive the email? Check your spam folder
            </span>
          </div>
          <Button variant="outline" className="w-full">
            Resend verification email
          </Button>
          <Button asChild variant="ghost" className="w-full">
            <Link to="/auth/login">Back to login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerification;
