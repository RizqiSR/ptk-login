import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, Label, Button } from "flowbite-react";
import { Form } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out the fields.");
    }

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      if (res.ok) {
        navigate("/dashboard", {replace: true});
      }
    } catch (error) {
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="border w-[400px] flex flex-col gap-8 p-5 bg-white/90 flex flex-col justify-center">
        <h1 className="text-lg">Sign in to your account</h1>
        <Form method="post" replace className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Label value="Email" />
          <TextInput
            type="email"
            name="email"
            placeholder="example@gmail.com"
            id="email"
            required
            onChange={handleChange}
          />
          <Label value="Password" />
          <TextInput
            type="password"
            name="password"
            placeholder="********"
            id="password"
            required
            onChange={handleChange}
          />

          <Button type="submit" className="bg-sky-900 p-3 text-white mt-5">
            Sign In
          </Button>
        </Form>

        <div className="">
          <span>Have an account? </span>
          <Link to="/sign-up" className="text-sky-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
