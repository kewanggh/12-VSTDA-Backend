namespace VSTDA.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPriorityToTodo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ToDoes", "Priority", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ToDoes", "Priority");
        }
    }
}
