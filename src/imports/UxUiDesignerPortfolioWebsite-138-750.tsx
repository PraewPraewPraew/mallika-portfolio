import svgPaths from "./svg-e2lbkeh949";

function H() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[354.422px]" data-name="h1">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Regular',sans-serif] leading-[40px] left-[177.5px] not-italic text-[#0a0a0a] text-[36px] text-center top-0 whitespace-nowrap">Case Study Not Found</p>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="ArrowLeft">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowLeft">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[44px] left-[24px] top-[12px] w-[97.766px]" data-name="Link">
      <ArrowLeft />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-[49px] text-[#0a0a0a] text-[16px] text-center top-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Back to Work
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute border border-[#0a0a0a] border-solid h-[70px] left-[103.33px] rounded-[33554400px] top-[56px] w-[147.766px]" data-name="Button">
      <Link />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[126px] relative shrink-0 w-[354.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <H />
        <Button />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[567px] relative shrink-0 w-[1541px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.016px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="h3">
      <p className="flex-[1_0_0] font-['Playfair_Display:Regular',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[24px]">Alex Rivers</p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 w-[303px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        UX/UI Designer crafting thoughtful digital experiences
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-0 top-0 w-[373.328px]" data-name="Container">
      <H1 />
      <P />
    </div>
  );
}

function H2() {
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
        About me
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

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[421.33px] top-0 w-[373.328px]" data-name="Container">
      <H2 />
      <Ul />
    </div>
  );
}

function H3() {
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

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <A />
      <A1 />
      <A2 />
      <A3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[842.66px] top-0 w-[373.344px]" data-name="Container">
      <H3 />
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[128px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function P1() {
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

function P2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[159.75px]" data-name="p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#7a7570] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`Designed & Built with ❤️`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[53px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <P1 />
      <P2 />
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[309px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[32px] relative size-full">
        <Container1 />
        <Container6 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[310px] relative shrink-0 w-[1541px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[rgba(10,10,10,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px px-[130.5px] relative size-full">
        <Div1 />
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

function Link1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[96.844px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Playfair_Display:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] tracking-[-0.6px] whitespace-nowrap">Mallika V.</p>
      </div>
    </div>
  );
}

function Span() {
  return <div className="absolute bg-[#c8ff00] h-[2px] left-0 top-[26px] w-0" data-name="span" />;
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[38.156px]" data-name="Link">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Work
      </p>
      <Span />
    </div>
  );
}

function Span1() {
  return <div className="absolute bg-[#c8ff00] h-[2px] left-0 top-[26px] w-0" data-name="span" />;
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-[70.16px] top-0 w-[73.172px]" data-name="Link">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        About me
      </p>
      <Span1 />
    </div>
  );
}

function Span2() {
  return <div className="absolute bg-[#c8ff00] h-[2px] left-0 top-[26px] w-0" data-name="span" />;
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-[175.33px] top-0 w-[60.328px]" data-name="Link">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#7a7570] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Contact
      </p>
      <Span2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[235.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[162.5px] top-0 w-[1216px]" data-name="div">
      <Link1 />
      <Container7 />
    </div>
  );
}

export default function UxUiDesignerPortfolioWebsite() {
  return (
    <div className="bg-white relative size-full" data-name="UX/UI Designer Portfolio Website">
      <Div />
      <Div2 />
    </div>
  );
}