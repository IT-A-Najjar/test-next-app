import Image from "next/image";
import Profile from './component/profile'

export default function Home() {
  return (
    <div className="p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <Profile />
    </div>
  );
}
