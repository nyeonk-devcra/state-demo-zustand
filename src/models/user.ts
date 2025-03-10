import { Prisma, User } from "@prisma/client";
import { getPrisma } from "@/lib/prisma";

export const getUser = async ({
  where,
}: {
  where: Prisma.UserWhereUniqueInput;
}): Promise<User | null> => {
  try {
    const prisma = await getPrisma();

    const result = await prisma.user.findUnique({
      where,
    });

    return result;
  } catch (err) {
    throw err;
  }
};
