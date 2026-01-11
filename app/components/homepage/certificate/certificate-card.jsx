// @flow strict
import Image from "next/image";
import Link from "next/link";

function CertificateCard({ certificate }) {
  const { title, issuer, image, link, date } = certificate;

  return (
    <div className="rounded-xl overflow-hidden bg-[#1a1443] border border-[#25213b] hover:scale-[1.02] transition-transform duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {issuer}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          {date}
        </p>

        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-block mt-4 text-sm font-medium text-violet-400 hover:text-pink-400 transition-colors"
          >
            View Certificate →
          </Link>
        )}
      </div>
    </div>
  );
}

export default CertificateCard;
