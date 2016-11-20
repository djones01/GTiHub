namespace GTiHub.Models.EntityModel
{
    public class ProjectMap : BaseEntity
    {
        public virtual Map Map { get; set; }

        public int MapId { get; set; }

        public virtual Project Project { get; set; }

        public int ProjectId { get; set; }
    }
}