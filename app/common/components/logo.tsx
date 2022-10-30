import Image from 'next/image';

export default function Logo() {
  return (
    <div className="w-12 h-auto">
      <Image
        className="w-12"
        src="/white-logo.png"
        width={48}
        height={48}
        alt="sdev white logo"
      />
    </div>
  );
}
