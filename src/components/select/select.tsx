'use client';

import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './select.module.css';

export type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  icon?: LucideIcon;
  openMenu?: boolean;
  options?: Option[];
  onOptionSelected?: (optionSelected: Option) => void;
};

function Select({
  options,
  label,
  icon: Icon,
  openMenu: expandMenu,
  //   onOptionSelected,
}: SelectProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(expandMenu ?? false);

  return (
    <section className={styles.container}>
      <div
        className={styles.trigger}
        onClick={() => {
          setOpenMenu((prev) => !prev);
        }}
      >
        {Icon && <Icon />} {label}
      </div>

      {openMenu && options && (
        <nav className={styles.content}>
          {options.map((option) => (
            <Link
              key={option.value}
              href={`/store/${option.value}`}
              onClick={() => {
                setOpenMenu((prev) => !prev);
              }}
            >
              {option.label}
            </Link>
          ))}
        </nav>
      )}
    </section>
  );
}

// Select.Trigger = function SelectTrigger() {
//   return null;
// };

export default Select;
