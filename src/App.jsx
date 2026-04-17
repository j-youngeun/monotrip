import { Navigate, Route, Routes } from "react-router-dom";
import { BottomNav } from "./components/navigation/BottomNav";
import { MobileShell } from "./components/layout/MobileShell";
import { HomePage } from "./pages/HomePage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

const pageContent = {
  explore: {
    title: "탐색",
    description: "AI 일정 생성과 내 일정 관리 화면을 이 구조 위에 이어서 붙일 수 있습니다.",
  },
  shorts: {
    title: "숏츠",
    description: "피그마 메인 화면 스타일에 맞춰 숏츠 피드도 같은 톤으로 확장 가능합니다.",
  },
  community: {
    title: "커뮤니티",
    description: "홈 카드형 레이아웃을 유지하면서 커뮤니티 전체 목록으로 확장할 수 있습니다.",
  },
  profile: {
    title: "마이페이지",
    description: "프로필과 저장한 일정, 활동 내역을 관리하는 구조로 이어갈 수 있습니다.",
  },
};

function App() {
  return (
    <MobileShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/explore"
          element={<PlaceholderPage {...pageContent.explore} />}
        />
        <Route
          path="/shorts"
          element={<PlaceholderPage {...pageContent.shorts} />}
        />
        <Route
          path="/community"
          element={<PlaceholderPage {...pageContent.community} />}
        />
        <Route
          path="/profile"
          element={<PlaceholderPage {...pageContent.profile} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
    </MobileShell>
  );
}

export default App;
