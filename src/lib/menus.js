/**
   * @typedef {Object} Menu
   * @property {string} label
   * @property {string} path
   * @property {boolean} [active]
   */


export const getMenus = (/** @type {number} */ activeIndex) => {
  /** @type Menu[] */
  const menus = [
    { label: "Kumpulan Arkas", path: "/app/arkas" },
    { label: "Naskah Hibah", path: "/app/naskah-hibah" },
    { label: "SPJ Online BOS", path: "/app/spj-online-bos" },
    { label: "Verifikasi BOS", path: "/app/verifikasi-bos" },
    { label: "Rekomendasi Pencairan", path: "/app/rekomendasi-pencairan" },
  ];
  const _menus = [...menus]
  if (!isNaN(activeIndex) && activeIndex >= 0) {
    _menus[activeIndex].active = true
  }
  return _menus
}

export const getSettingsMenus = (/** @type {number | undefined} */ activeIndex) => {
  /** @type Menu[] */
  const menus = [
    { label: "Biodata", path: "/app/settings/biodata" },
    { label: "Ganti Password", path: "/app/settings/password" },
    { label: "Logout", path: "/logout" },
  ];
  const _menus = [...menus]
  if (typeof activeIndex === 'number' && !isNaN(activeIndex) && activeIndex >= 0) {
    _menus[activeIndex].active = true
  }
  return _menus
}