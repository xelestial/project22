'use client';

import Link from 'next/link';
import styles from './BookList.module.css'

export const BackIcon = () => {
    return (
        <Link href="/">
                <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M19 12H5"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path
                    d="M12 5L5 12L12 19"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
        </Link>
    );
  };