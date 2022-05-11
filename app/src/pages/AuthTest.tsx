import React from 'react';
import { useAuth } from '../hooks/FBAuthProvider';

function CreateUser() {
  const auth = useAuth();
  //   const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          auth.signup(email, password, '', '');
        }}
      >
        Create User
      </button>
    </form>
  );
}

function SignIn() {
  const auth = useAuth();
  //   const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = async () => {
    try {
      await auth.signin(email, password);
    } catch (e) {
      // set errors
    }
  };

  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleSignIn}>
        sign in
      </button>
    </form>
  );
}

export default function AuthTest() {
  const auth = useAuth();

  if (auth.loading) {
    return <div>loading...</div>;
  }
  if (auth.user) {
    return (
      <div>
        <p>Welcome {auth.user.email}! </p>
        <button
          type="button"
          onClick={() => {
            auth.signout();
          }}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div>
      <CreateUser />
      <SignIn />
      <button type="button">test</button>
      <p>You are not logged in.</p>
    </div>
  );
}
