"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./DropDownMenu.module.scss";
import { FiChevronDown, FiChevronRight, FiMenu } from "react-icons/fi";

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Студентам",
    children: [
      { label: "Расписание", href: "/students/schedule" },
      { label: "Стипендии", href: "/students/scholarships" },
    ],
  },
  { label: "Преподавателям", href: "/teachers" },
  {
    label: "Абитуриентам",
    children: [
      { label: "Приёмная комиссия", href: "/applicants/admissions" },
      { label: "Программы", href: "/applicants/programs" },
    ],
  },
  { label: "Образовательный кредит", href: "/credit" },
  { label: "Новости", href: "/news" },
];

export default function DropDownMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setOpenSubmenus({});
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <button
        className={`${styles.menuToggle} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.menuText}>Меню</span>
        <FiMenu className={styles.burgerIcon} />
        <FiChevronDown
          className={`${styles.arrow} ${menuOpen ? styles.rotate : ""}`}
        />
      </button>

      {menuOpen && (
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                {item.children ? (
                  <>
                    <button
                      className={styles.submenuToggle}
                      onClick={() => toggleSubmenu(index)}
                    >
                      {item.label}
                      <FiChevronRight
                        className={`${styles.arrowRight} ${
                          openSubmenus[index] ? styles.rotateRight : ""
                        }`}
                      />
                    </button>
                    {openSubmenus[index] && (
                      <ul className={styles.submenu}>
                        {item.children.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <a href={sub.href}>{sub.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} className={styles.menuLink}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button className={styles.loginButton}>Войти</button>
        </nav>
      )}
    </div>
  );
}
