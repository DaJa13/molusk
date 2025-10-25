export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        🐚 Морские Моллюски
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#666' }}>
        Сайт временно в режиме отладки
      </p>
      <p style={{ marginTop: '2rem' }}>
        Если вы видите эту страницу, роутинг работает корректно!
      </p>
    </main>
  );
}

