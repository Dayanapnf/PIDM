import React from "react";
import { View, Text } from "react-native";

const StatsCard = ({ totalTasks, pendingTasks, completedTasks }) => {
  return (
    <View>
      <Text>Total: {totalTasks}</Text>
      <Text>Pendentes: {pendingTasks}</Text>
      <Text>Concluídas: {completedTasks}</Text>
    </View>
  );
};

export default StatsCard;
