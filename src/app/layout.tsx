import "../../styles/css/bootstrap.min.css";
import "../../styles/css/animate.css";
import "swiper/css";
import "swiper/css/bundle";
import "../../styles/css/icofont.css";
import "react-accessible-accordion/dist/fancy-example.css";
// Global Styles
import "../../styles/css/style.css";

// Default Color
import "../../styles/color/color-default.css";
// import '../../styles/color/gradient-color-one.css';
// import '../../styles/color/gradient-color-two.css';
// import '../../styles/color/gradient-color-three.css';
// import '../../styles/color/gradient-color-four.css';
// import '../../styles/color/gradient-color-five.css';
// import '../../styles/color/gradient-color-six.css';
// import '../../styles/color/gradient-color-seven.css';
// import '../../styles/color/gradient-color-eight.css';
// import '../../styles/color/gradient-color-nine.css';
// import '../../styles/color/gradient-color-ten.css';
// import '../../styles/color/gradient-color-eleven.css';
// import '../../styles/color/gradient-color-eight.css';

// Global Responsive Styles
import "../../styles/css/responsive.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AosAnimation from "@/components/Navigation/AosAnimation";
import GoTop from "@/components/Common/GoTop";
import SidebarDemosModal from "@/components/Common/SidebarDemosModal";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT. SUN",
  description: "Mobile App & Software Landing Page React Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}

        <AosAnimation />

        <GoTop />

        <SidebarDemosModal />
      </body>
    </html>
  );
}
