'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackButton() {
  return (
    <button type="submit" aria-label="Go back to previous page" onClick={() => window.history.back()}>
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </button>
  );
}
