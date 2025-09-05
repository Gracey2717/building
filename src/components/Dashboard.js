export default function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <p>Your role: {user.role}</p>

      {user.role === "admin" ? (
        <div>
          <h2>Upload Images (Admin Only)</h2>
          {/* Upload form will go here */}
        </div>
      ) : (
        <div>
          <h2>Gallery</h2>
          <p>Regular users can only view images</p>
        </div>
      )}

      <button onClick={onLogout}>Log Out</button>
    </div>
  );
}
