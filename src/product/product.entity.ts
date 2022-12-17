import { Category } from "src/category/category.entity";
import { Column, CreateDateColumn, DeleteDateColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date
}