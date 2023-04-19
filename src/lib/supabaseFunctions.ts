import supabase, { Database } from "./supabase";

export const TABLE_NAME = "chat-app";

export const fetchDatabase = async () => {
  try {
    const { data } = await supabase.from(TABLE_NAME).select("*").order("createdAt");
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

type InsertProps = Pick<Database, "message" | "nickName" | "avatarUrl">;

export const addSupabaseData = async (props: InsertProps) => {
  try {
    const { data } = await supabase.from(TABLE_NAME).insert(props);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
