function StatusBadge({ isAvailable }) {
  return <>{isAvailable ? <p>Доступен для проекта</p> : <p>Сейчас занят</p>}</>;
}

export default StatusBadge;
