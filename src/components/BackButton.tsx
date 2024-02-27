'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button type="submit" aria-label="Go back to previous page" onClick={handleBackClick}>
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </button>
  );
}
