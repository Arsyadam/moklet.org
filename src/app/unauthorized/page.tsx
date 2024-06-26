import { Metadata } from "next";
import Image from "@/app/_components/global/Image";
import PrimaryLinkButton from "@/app/_components/global/LinkButton";
import { H1, P } from "@/app/_components/global/Text";
import { SectionWrapper } from "@/app/_components/global/Wrapper";

export const metadata: Metadata = {
  title: "Akses ditolak",
};

export default async function Unauthorized() {
  return (
    <SectionWrapper id="success">
      <div className="flex flex-col justify-center items-center gap-20 px-5 py-[22px]">
        <Image
          src={"/images/Forbidden.svg"}
          alt={"404"}
          width={460}
          height={244}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="mb-11 text-center">
            <H1 className="mb-[18px]">Tidak Dapat Mengakses Halaman</H1>
            <P>
              Anda tidak memiliki akses pada halaman ini, harap masuk akun Anda
              atau kembali ke beranda kami.
            </P>
          </div>
          <PrimaryLinkButton href="/">Kembali ke beranda</PrimaryLinkButton>
        </div>
      </div>
    </SectionWrapper>
  );
}
