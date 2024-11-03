import { Group, Avatar, Text, Accordion } from "@mantine/core";

const projects = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Coffer Quest",
    description: "Medieval management game",
    content:
      "Look after your household and its finances through hardships and trying times. Made with Unreal Engine 5.",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Together We Die",
    description: "Co-op horror fps",
    content:
      "Fight the apocalypse with your fellow templars, or die trying. Made with Unreal Engine 5.",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Boing Odyssey",
    description: "Physics puzzler",
    content:
      "Solve puzzles by building wacky contraptions. Made with Unity, uses Unity Gaming Services for the backend.",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Project Godspeed",
    description: "Run-and-gun platformer",
    content:
      "Hunt the most dangerous criminals in the multiverse, wielding various weapons and power-ups. Made with Unity.",
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export function ProjectDisplay() {
  const items = projects.map((project) => (
    <Accordion.Item value={project.label} key={project.label}>
      <Accordion.Control>
        <AccordionLabel {...project} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{project.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
