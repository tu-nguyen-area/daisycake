'use client';

export default function SigninForm() {
  return (

    <div className="flex flex-row justify-center">
      <form>
        <div className="rounded-lg px-6 pb-4 pt-8">
          <h1 className="text-center mt-36 p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-64 text-white rounded-xl text-xl">Please sign in to continue</h1>
          <div className="mt-3">
            <div className="text-xl">
              <label htmlFor="email">Email</label>
              <div>
                <input className="w-full rounded-md" type="email" name="email" placeholder="Enter your email address" />
              </div>
            </div>
            <div className="text-xl">
              <label htmlFor="password">Password</label>
              <div>
                <input className="w-full rounded-md" type="password" name="password" placeholder="Enter your password" />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="rounded-lg p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-32 text-xl">Sign in</button>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
}
