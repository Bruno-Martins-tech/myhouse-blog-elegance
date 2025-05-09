
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to blog home
    navigate("/blog");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Redirecionando...</h1>
        <p className="text-xl text-gray-600">Aguarde um momento.</p>
      </div>
    </div>
  );
};

export default Index;
