import Avatar from './Avatar';

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function Profile() {
  const _person1 = {
    name: 'Lin Lanying',
    imageId: '1bX5QH6',
  };
  const _person2 = {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
  };
  const _person3 = {
    name: 'Aklilu Lemma',
    imageId: 'OKS67lh',
  };

  return (
    <div>
      <Card>
        <Avatar person={_person1} size={100} />
      </Card>
      <Card>
        <Avatar person={_person2} size={100} />
      </Card>
      <Card>
        <Avatar person={_person3} size={100} />
      </Card>
    </div>
  );
}
