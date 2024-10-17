import ParticlesBackground from "./components/ParticleBg";
import UsersTable from "./pages/usersTable"; // Capitalize the import for consistency

function App() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-white">Fetch Data from API : Axel</h1>
        <UsersTable />
      </div>
    </div>  
    </>
  );
}

export default App;
