"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Rating,
  Text,
  Textarea,
  Title,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>

      <Rating size="lg"></Rating>

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        minRows={3}
        mt="xs"
      ></Textarea>

      <Button color="orange" mt="xs">
        {" "}
        Submit Review
      </Button>

      <Divider my="sm"></Divider>
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} size="sm" readOnly />
      </Group>
      <Text align="center" color="gray">
        {" "}
        Best pizza in this world. I give you X score.{" "}
      </Text>

      <Divider my="sm"></Divider>
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} size="sm" readOnly />
      </Group>
      <Text align="center" color="gray">
        {" "}
        My favourite part is pepperoni{" "}
      </Text>

      <Pagination
        total={20}
        siblings={1}
        defaultValue={1}
        position="center"
        mt="md"
        color="orange"
      />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Tikomporn Luxsanaprokin 650612085
      </Text>
    </Container>
  );
}
