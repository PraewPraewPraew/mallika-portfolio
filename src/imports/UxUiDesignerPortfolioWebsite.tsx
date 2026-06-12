import svgPaths from "./svg-ewpoc3rs4r";
import imgImageWithFallback from "figma:asset/b15a8270ed4716756a7a7cb6209aaff9a5d6e149.png";
import imgImageWithFallback1 from "figma:asset/0309c02f571c1d33ddcad7693fdded2716029e7d.png";
import imgImageWithFallback2 from "figma:asset/4869420a462977d8f72a8c75a33c582a8b62356f.png";

function Sparkles() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Sparkles">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_73_5887)" id="Sparkles">
          <path d={svgPaths.p874e300} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_73_5887">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="absolute h-[20px] left-[40px] top-[8px] w-[218.406px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0a0a0a] text-[14px] top-0 whitespace-nowrap">Available for new projects</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[rgba(200,255,0,0.2)] h-[36px] left-0 rounded-[33554400px] top-0 w-[274.406px]" data-name="div">
      <Sparkles />
      <Span />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[270px] left-0 top-[68px] w-[576px]" data-name="h1">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[0] left-0 not-italic text-[#0a0a0a] text-[0px] text-[72px] top-0 w-[533px]">
        <span className="leading-[90px]">{`Crafting digital experiences that `}</span>
        <span className="font-['Playfair_Display:Italic',sans-serif] italic leading-[90px]">matter</span>
      </p>
    </div>
  );
}

function P() {
  return (
    <div className="absolute h-[84px] left-0 top-[370px] w-[576px]" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] left-0 text-[#7a7570] text-[20px] top-0 w-[559px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`I'm Alex Rivers, a UX/UI designer specializing in creating thoughtful, user-centered digital products. From research to pixel-perfect interfaces, I bring ideas to life.`}</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute left-0 size-[20px] top-[28px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowRight">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #F7F5F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #F7F5F1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[48px] relative shrink-0 w-[117.609px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] left-[59px] text-[#f7f5f1] text-[18px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          View My Work
        </p>
        <ArrowRight />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0a0a0a] h-[80px] relative rounded-[33554400px] shrink-0 w-[181.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[104.969px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] left-[52.5px] text-[#0a0a0a] text-[18px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Get in Touch
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[80px] relative rounded-[33554400px] shrink-0 w-[170.969px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0a0a0a] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Link1 />
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[80px] items-start left-0 top-[486px] w-[576px]" data-name="div">
      <Button />
      <Button1 />
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="absolute h-[566px] left-0 top-0 w-[576px]" data-name="motion.div">
      <Div2 />
      <H />
      <P />
      <Div3 />
    </div>
  );
}

function P1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[48px] left-0 not-italic text-[#0a0a0a] text-[48px] top-0 whitespace-nowrap">50+</p>
    </div>
  );
}

function P2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Projects Completed
      </p>
    </div>
  );
}

function Div4() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="div">
      <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[33px] px-[33px] relative size-full">
        <P1 />
        <P2 />
      </div>
    </div>
  );
}

function P3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[48px] left-0 not-italic text-[#0a0a0a] text-[48px] top-0 whitespace-nowrap">8+</p>
    </div>
  );
}

function P4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Years Experience
      </p>
    </div>
  );
}

function Div5() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="div">
      <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[33px] px-[33px] relative size-full">
        <P3 />
        <P4 />
      </div>
    </div>
  );
}

function P5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[48px] left-0 not-italic text-[#0a0a0a] text-[48px] top-0 whitespace-nowrap">30+</p>
    </div>
  );
}

function P6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Happy Clients
      </p>
    </div>
  );
}

function Div6() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0" data-name="div">
      <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[33px] px-[33px] relative size-full">
        <P5 />
        <P6 />
      </div>
    </div>
  );
}

function P7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[48px] left-0 not-italic text-[#0a0a0a] text-[48px] top-0 whitespace-nowrap">1,000+</p>
    </div>
  );
}

function P8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Happy User
      </p>
    </div>
  );
}

function Div7() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[12px] row-2 self-stretch shrink-0" data-name="div">
      <div aria-hidden="true" className="absolute border border-[rgba(10,10,10,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[33px] px-[33px] relative size-full">
        <P7 />
        <P8 />
      </div>
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="absolute gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[316px] left-[640px] top-[125px] w-[576px]" data-name="motion.div">
      <Div4 />
      <Div5 />
      <Div6 />
      <Div7 />
    </div>
  );
}

function Div1() {
  return (
    <div className="flex-[1_0_0] h-[566px] min-h-px min-w-px relative" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MotionDiv />
        <MotionDiv1 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex h-[865px] items-center left-0 px-[162.5px] top-0 w-[1541px]" data-name="section">
      <Div1 />
    </div>
  );
}

function P9() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[1216px]" data-name="p">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#7a7570] text-[14px] top-0 tracking-[1.4px] uppercase whitespace-nowrap">Featured Work</p>
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[48px] left-0 top-[36px] w-[1216px]" data-name="h2">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[48px] left-0 not-italic text-[#0a0a0a] text-[48px] top-0 whitespace-nowrap">Selected Projects</p>
    </div>
  );
}

function P10() {
  return (
    <div className="absolute h-[56px] left-0 top-[100px] w-[672px]" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] left-0 text-[#7a7570] text-[20px] top-0 w-[656px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        A showcase of my recent work across mobile apps, web platforms, and design systems.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="Container">
      <P9 />
      <H1 />
      <P10 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[279.984px] left-0 top-0 w-[373.328px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[279.984px] left-0 top-0 w-[373.328px]" data-name="Container" />;
}

function Div8() {
  return (
    <div className="bg-white h-[279.984px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="div">
      <ImageWithFallback />
      <Container2 />
    </div>
  );
}

function P11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#7a7570] text-[14px] top-0 tracking-[1.4px] uppercase whitespace-nowrap">App Design</p>
    </div>
  );
}

function H2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-0 whitespace-nowrap">Nova Banking</p>
    </div>
  );
}

function P12() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 w-[367px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Reimagining digital banking for Gen Z with a focus on financial literacy and gamification.
      </p>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-0 rounded-[33554400px] top-[8px] w-[80.609px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">Mobile</p>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-[88.61px] rounded-[33554400px] top-[8px] w-[89.703px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">Fintech</p>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-[186.31px] rounded-[33554400px] top-[8px] w-[126.109px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">UX Research</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <Span1 />
      <Span2 />
      <Span3 />
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[178px] items-start relative shrink-0 w-full" data-name="div">
      <P11 />
      <H2 />
      <P12 />
      <Container3 />
    </div>
  );
}

function MotionDiv2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[481.984px] items-start left-0 top-0 w-[373.328px]" data-name="motion.div">
      <Div8 />
      <Div9 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[279.984px] left-0 top-0 w-[373.328px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[279.984px] left-0 top-0 w-[373.328px]" data-name="Container" />;
}

function Div10() {
  return (
    <div className="bg-white h-[279.984px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="div">
      <ImageWithFallback1 />
      <Container4 />
    </div>
  );
}

function P13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#7a7570] text-[14px] top-0 tracking-[1.4px] uppercase whitespace-nowrap">Design System</p>
    </div>
  );
}

function H3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-0 whitespace-nowrap">Lumina Design System</p>
    </div>
  );
}

function P14() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 w-[326px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Building a scalable design system for a SaaS platform serving 50k+ daily users.
      </p>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-0 rounded-[33554400px] top-[8px] w-[117px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">Components</p>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-[125px] rounded-[33554400px] top-[8px] w-[144.313px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">Documentation</p>
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-[277.31px] rounded-[33554400px] top-[8px] w-[80.609px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">Tokens</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <Span4 />
      <Span5 />
      <Span6 />
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[178px] items-start relative shrink-0 w-full" data-name="div">
      <P13 />
      <H3 />
      <P14 />
      <Container5 />
    </div>
  );
}

function MotionDiv3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[481.984px] items-start left-[421.33px] top-0 w-[373.328px]" data-name="motion.div">
      <Div10 />
      <Div11 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[280px] left-0 top-0 w-[373.344px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[280px] left-0 top-0 w-[373.344px]" data-name="Container" />;
}

function Div12() {
  return (
    <div className="bg-white h-[280px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="div">
      <ImageWithFallback2 />
      <Container6 />
    </div>
  );
}

function P15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#7a7570] text-[14px] top-0 tracking-[1.4px] uppercase whitespace-nowrap">App Design</p>
    </div>
  );
}

function H4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-0 whitespace-nowrap">Flow Fitness</p>
    </div>
  );
}

function P16() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 w-[364px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Creating an intuitive workout tracking experience with AI-powered coaching.
      </p>
    </div>
  );
}

function Span7() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-0 rounded-[33554400px] top-[8px] w-[80.609px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">Mobile</p>
    </div>
  );
}

function Span8() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-[88.61px] rounded-[33554400px] top-[8px] w-[80.609px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">Health</p>
    </div>
  );
}

function Span9() {
  return (
    <div className="absolute border border-[#7a7570] border-solid h-[30px] left-[177.22px] rounded-[33554400px] top-[8px] w-[71.5px]" data-name="span">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#7a7570] text-[14px] top-[4px] tracking-[0.7px] uppercase whitespace-nowrap">AI/ML</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <Span7 />
      <Span8 />
      <Span9 />
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[178px] items-start relative shrink-0 w-full" data-name="div">
      <P15 />
      <H4 />
      <P16 />
      <Container7 />
    </div>
  );
}

function MotionDiv4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[482px] items-start left-[842.66px] top-0 w-[373.344px]" data-name="motion.div">
      <Div12 />
      <Div13 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[482px] relative shrink-0 w-full" data-name="Container">
      <MotionDiv2 />
      <MotionDiv3 />
      <MotionDiv4 />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="absolute left-0 size-[20px] top-[28px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowRight">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[137.688px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] left-[69px] text-[#0a0a0a] text-[18px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          View All Projects
        </p>
        <ArrowRight1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[82px] relative rounded-[33554400px] shrink-0 w-[203.688px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#0a0a0a] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[82px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[64px] h-[1104px] items-start left-0 pt-[128px] px-[162.5px] top-[865px] w-[1541px]" data-name="Section">
      <Container />
      <Container1 />
      <Container8 />
    </div>
  );
}

function Section2() {
  return <div className="absolute h-[380px] left-[162.5px] top-[2097px] w-[1216px]" data-name="Section" />;
}

function Section3() {
  return <div className="absolute bg-[#0a0a0a] h-[468px] left-0 top-[2605px] w-[1541px]" data-name="Section" />;
}

function MainContent() {
  return (
    <div className="h-[3073px] relative shrink-0 w-[1541px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

function H5() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="h3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Regular',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[24px]">Alex Rivers</p>
    </div>
  );
}

function P17() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 w-[303px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        UX/UI Designer crafting thoughtful digital experiences
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-0 top-0 w-[373.328px]" data-name="Container">
      <H5 />
      <P17 />
    </div>
  );
}

function H6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-1px] tracking-[0.8px] uppercase whitespace-nowrap">Quick Links</p>
    </div>
  );
}

function Li() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Work
      </p>
    </div>
  );
}

function Li1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        About
      </p>
    </div>
  );
}

function Li2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Contact
      </p>
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[421.33px] top-0 w-[373.328px]" data-name="Container">
      <H6 />
      <Ul />
    </div>
  );
}

function H7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-1px] tracking-[0.8px] uppercase whitespace-nowrap">Connect</p>
    </div>
  );
}

function Github() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Github">
      <div className="absolute inset-[8.33%_16.62%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0189 18.3333">
            <path d={svgPaths.p17d8aa0} id="Vector" stroke="var(--stroke-0, #7A7570)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_62.5%_22.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-39.06%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50021 3.80005">
            <path d={svgPaths.p2a802480} id="Vector" stroke="var(--stroke-0, #7A7570)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function A() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Github />
      </div>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Linkedin">
      <div className="absolute inset-[33.33%_8.33%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 12.5">
            <path d={svgPaths.p21836480} id="Vector" stroke="var(--stroke-0, #7A7570)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[8.33%] right-3/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 11.6667">
            <path d={svgPaths.p1a426680} id="Vector" stroke="var(--stroke-0, #7A7570)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[8.33%] right-3/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p29efb800} id="Vector" stroke="var(--stroke-0, #7A7570)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function A1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Linkedin />
      </div>
    </div>
  );
}

function Twitter() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Twitter">
      <div className="absolute inset-[16.63%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%_-5.91%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 15.8435">
            <path d={svgPaths.p3693ea00} id="Vector" stroke="var(--stroke-0, #7A7570)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function A2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Twitter />
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Mail">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15">
            <path d={svgPaths.p2b3c0500} id="Vector" stroke="var(--stroke-0, #7A7570)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 6.66345">
            <path d={svgPaths.p38f0cf80} id="Vector" stroke="var(--stroke-0, #7A7570)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function A3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Mail />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <A />
      <A1 />
      <A2 />
      <A3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[842.66px] top-0 w-[373.344px]" data-name="Container">
      <H7 />
      <Container13 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function P18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[248.328px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#7a7570] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          © 2026 Alex Rivers. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function P19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[159.75px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#7a7570] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`Designed & Built with ❤️`}</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[53px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <P18 />
      <P19 />
    </div>
  );
}

function Div14() {
  return (
    <div className="h-[309px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[32px] relative size-full">
        <Container9 />
        <Container14 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[310px] relative shrink-0 w-[1541px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px px-[130.5px] relative size-full">
        <Div14 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-[#f7f5f1] content-stretch flex flex-col gap-[96px] h-[945px] items-start left-0 pt-[80px] top-0 w-[1541px]" data-name="div">
      <MainContent />
      <Footer />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[112.781px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Playfair_Display:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.6px] whitespace-nowrap">Alex Rivers</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.891px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[29px] text-[#f7f5f1] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`Let's Talk`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex h-[36px] items-center justify-center left-[240.06px] rounded-[33554400px] top-0 w-[89.891px]" data-name="Button">
      <Link4 />
    </div>
  );
}

function Span10() {
  return <div className="absolute bg-[#c8ff00] h-[2px] left-0 top-[26px] w-0" data-name="span" />;
}

function Link5() {
  return (
    <div className="absolute h-[24px] left-0 top-[6px] w-[38.156px]" data-name="Link">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Work
      </p>
      <Span10 />
    </div>
  );
}

function Span11() {
  return <div className="absolute bg-[#c8ff00] h-[2px] left-0 top-[26px] w-0" data-name="span" />;
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-[70.16px] top-[6px] w-[45.578px]" data-name="Link">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        About
      </p>
      <Span11 />
    </div>
  );
}

function Span12() {
  return <div className="absolute bg-[#c8ff00] h-[2px] left-0 top-[26px] w-0" data-name="span" />;
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-[147.73px] top-[6px] w-[60.328px]" data-name="Link">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Contact
      </p>
      <Span12 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[36px] relative shrink-0 w-[329.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button3 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Div15() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[162.5px] top-0 w-[1216px]" data-name="div">
      <Link3 />
      <Container15 />
    </div>
  );
}

export default function UxUiDesignerPortfolioWebsite() {
  return (
    <div className="bg-white relative size-full" data-name="UX/UI Designer Portfolio Website">
      <Div />
      <Div15 />
    </div>
  );
}