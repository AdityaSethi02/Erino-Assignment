import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { contactSchema } from "@adityasethi1701/ernio-task-common";

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    const parsedInput = contactSchema.safeParse(req.body);

    if (!parsedInput.success) {
        res.status(400).json({ error: 'Invalid input' });
    }

    const { firstName, lastName, email, phone, company, jobTitle } = req.body;

    try {
        const contact = await prisma.contact.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                company,
                jobTitle,
            }
        });
        res.json(contact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create contact' });
    }
});

router.get('/', async (req, res) => {
    try {
        const allContacts = await prisma.contact.findMany();
        res.json(allContacts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    const parsedInput = contactSchema.safeParse(req.body);

    if (!parsedInput.success) {
        res.status(400).json({ error: 'Invalid input' });
    }

    const { firstName, lastName, email, phone, company, jobTitle } = req.body;
    
    try {
        const updatedContact = await prisma.contact.update({
            where: {
                id: Number(id)
            },
            data: {
                firstName,
                lastName,
                email,
                phone,
                company,
                jobTitle
            }
        });
        res.json(updatedContact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to update contact' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await prisma.contact.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (contact) {
            res.json(contact);
        } else {
            res.status(404).json({ message: "Contact not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
  });

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedContact = await prisma.contact.delete({
            where: {
                id: Number(id)
            }
        });
        res.json({ message: 'Contact deleted', deletedContact });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to delete contact' });
    }
});

export default router;
