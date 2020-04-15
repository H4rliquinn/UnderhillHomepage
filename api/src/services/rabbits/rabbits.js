import { db } from 'src/lib/db'

export const rabbits = ({ status }) => {
  return db.rabbit.findMany({
    where: { status },
  })
}

export const rabbit = ({ id }) => {
  return db.rabbit.findOne({
    where: { id },
  })
}

export const createRabbit = ({ input }) => {
  return db.rabbit.create({
    data: input,
  })
}

export const updateRabbit = ({ id, input }) => {
  return db.rabbit.update({
    data: input,
    where: { id },
  })
}

export const deleteRabbit = ({ id }) => {
  return db.rabbit.delete({
    where: { id },
  })
}
