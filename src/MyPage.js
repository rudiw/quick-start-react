import './MyPage.css';
import Heading from './Heading';
import Section from './Section';

export default function MyPage() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading 1</Heading>
        <Heading>Heading 1</Heading>
        <Heading>Heading 1</Heading>
        <Section level={3}>
          <Heading>Heading 2</Heading>
          <Heading>Heading 2</Heading>
          <Heading>Heading 2</Heading>
          <Section level={4}>
            <Heading>Heading 3</Heading>
            <Heading>Heading 3</Heading>
            <Heading>Heading 3</Heading>
          </Section>
        </Section>
      </Section>
      <Heading level={5}>Heading 4</Heading>
      <Heading level={6}>Heading 5</Heading>
    </Section>
  );
}
