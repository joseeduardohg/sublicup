import prisma from '@/lib/db';

export default async function TestPage() {
  const users = await prisma.user.findMany();

  return (
    <section>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
}
