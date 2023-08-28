"use client";
import {
  Button,
  Container,
  Rating,
  Text,
  Textarea,
  Title,
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

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Tikomporn Luxsanaprokin 650612085
      </Text>
    </Container>
  );
}
