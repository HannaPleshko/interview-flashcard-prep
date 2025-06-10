import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, HeartCrack, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Rate = () => {
  const [likes, setLikes] = useState(26);
  const [dislikes, setDislikes] = useState(0);
  const [voted, setVoted] = useState<"like" | "dislike" | null>(null);

  const handleLike = () => {
    if (voted === "like") {
      setLikes(likes - 1);
      setVoted(null);
    } else if (voted === "dislike") {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      setVoted("like");
    } else {
      setLikes(likes + 1);
      setVoted("like");
    }
  };

  const handleDislike = () => {
    if (voted === "dislike") {
      setDislikes(dislikes - 1);
      setVoted(null);
    } else if (voted === "like") {
      setDislikes(dislikes + 1);
      setLikes(likes - 1);
      setVoted("dislike");
    } else {
      setDislikes(dislikes + 1);
      setVoted("dislike");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Понравилось приложение?
            </h1>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg">
              Ваш лайк очень важен для меня!
            </p>

            <div className="flex justify-center items-center gap-8 mb-10">
              <div className="flex flex-col items-center gap-2">
                <Button
                  onClick={handleLike}
                  variant={voted === 'like' ? 'default' : 'outline'}
                  className={`w-20 h-20 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    voted === 'like'
                      ? 'bg-red-500 hover:bg-red-600 text-white border-2 border-red-600'
                      : 'border-2 border-red-200 text-red-500 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Heart className="w-10 h-10" fill="none" stroke={voted === 'like' ? 'white' : 'currentColor'} />
                </Button>
                <span className="text-2xl font-bold text-red-500">{likes}</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button
                  onClick={handleDislike}
                  variant={voted === 'dislike' ? 'default' : 'outline'}
                  className={`w-20 h-20 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    voted === 'dislike'
                      ? 'bg-gray-500 hover:bg-gray-600 text-white border-2 border-gray-600'
                      : 'border-2 border-gray-300 text-gray-400 hover:bg-gray-100 hover:text-gray-400'
                  }`}
                >
                  <HeartCrack className="w-10 h-10" fill="none" stroke={voted === 'dislike' ? 'white' : 'currentColor'} />
                </Button>
                <span className="text-2xl font-bold text-gray-500">{dislikes}</span>
              </div>
            </div>

            <Button asChild className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/">
                <Sparkles className="h-4 w-4 mr-2" />
                Вернуться на главную
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rate; 