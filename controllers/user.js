import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      "select": {
        "name": true,
        "money": true,
      },
    });

    if (users.length === 0) return res.status(404).json({ "msg": "No users found." });

    return res.status(200).json({ "data": users });
  } catch (error) {
    return res.status(500).json({ "msg": error.message });
  }
};

export {
  getUsers
};