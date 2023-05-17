import Image from "next/image";

interface ProfileImage {
  src?: string | null;
  className?: string;
}

const ProfileImage = ({ src, className = "" }: ProfileImage) => {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
    >
      {src == null ? null : (
        <Image src={src} alt="Profile Image" quality={100} fill />
      )}
    </div>
  );
};
export default ProfileImage;
